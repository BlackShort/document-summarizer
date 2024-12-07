from transformers import AutoModelForSeq2SeqLM, AutoTokenizer
from datasets import load_from_disk
from app.models.config_models import ModelEvaluationConfig
import torch
from tqdm import tqdm
from evaluate import load

class ModelEvaluation:
    def __init__(self, config: ModelEvaluationConfig):
        self.config = config

    def calculate_metrics(self):
        model = AutoModelForSeq2SeqLM.from_pretrained(self.config.model_path).to("cuda" if torch.cuda.is_available() else "cpu")
        tokenizer = AutoTokenizer.from_pretrained(self.config.tokenizer_path)

        dataset = load_from_disk(self.config.data_path)
        metric = load("rouge")

        for sample in tqdm(dataset["test"]):
            inputs = tokenizer(sample["dialogue"], return_tensors="pt")
            summary_ids = model.generate(inputs["input_ids"])
            preds = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
            metric.add_batch(predictions=[preds], references=[sample["summary"]])

        results = metric.compute()
        print("ROUGE scores:", results)
