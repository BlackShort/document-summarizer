import os
from transformers import TrainingArguments, Trainer, DataCollatorForSeq2Seq, AutoModelForSeq2SeqLM, AutoTokenizer
from datasets import load_from_disk
from app.models.config_models import ModelTrainerConfig
import torch

class ModelTrainer:
    def __init__(self, config: ModelTrainerConfig):
        self.config = config

    def train(self):
        device = "cuda" if torch.cuda.is_available() else "cpu"
        tokenizer = AutoTokenizer.from_pretrained(self.config.model_ckpt)
        model = AutoModelForSeq2SeqLM.from_pretrained(self.config.model_ckpt).to(device)

        data_collator = DataCollatorForSeq2Seq(tokenizer, model=model)
        dataset = load_from_disk(self.config.data_path)

        training_args = TrainingArguments(
            output_dir=self.config.root_dir,
            num_train_epochs=self.config.num_train_epochs,
            per_device_train_batch_size=self.config.per_device_train_batch_size,
            evaluation_strategy=self.config.eval_strategy
        )

        trainer = Trainer(
            model=model,
            args=training_args,
            train_dataset=dataset["train"],
            eval_dataset=dataset["validation"],
            data_collator=data_collator,
            tokenizer=tokenizer
        )

        trainer.train()

        model.save_pretrained(os.path.join(self.config.root_dir, "pegasus-model"))
        tokenizer.save_pretrained(os.path.join(self.config.root_dir, "tokenizer"))
