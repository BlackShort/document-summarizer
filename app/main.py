from app.controllers.stage_01_data_ingestion import DataIngestionTrainingPipeline
from app.controllers.stage_02_data_validation import DataValidationTrainingPipeline
from app.controllers.stage_03_data_transformation import DataTransformationTrainingPipeline
from app.controllers.stage_04_model_trainer import ModelTrainerTrainingPipeline
from app.controllers.stage_05_model_evaluation import ModelEvaluationTrainingPipeline
from app.app_logging import logger


# Data Ingestion Stage
STAGE_NAME = "Data Ingestion Stage"
try:
    logger.info(f">>>>>>> stage {STAGE_NAME} started")
    data_ingestion = DataIngestionTrainingPipeline()
    data_ingestion.main()
    logger.info(f">>>>> stage {STAGE_NAME} completed successfully <<<<<<<<\m\nx============x")
except Exception as e:
    logger.exception(e)
    raise e


# Data Validation Stage
STAGE_NAME = "Data Validation Stage"
try:
   logger.info(f">>>>>> stage {STAGE_NAME} started <<<<<<") 
   data_validation = DataValidationTrainingPipeline()
   data_validation.main()
   logger.info(f">>>>>> stage {STAGE_NAME} completed <<<<<<\n\nx==========x")
except Exception as e:
        logger.exception(e)
        raise e
     
     
# Data Transformation Stage
STAGE_NAME = "Data Transformation stage"
try:
   logger.info(f">>>>>> stage {STAGE_NAME} started <<<<<<") 
   data_transformation = DataTransformationTrainingPipeline()
   data_transformation.main()
   logger.info(f">>>>>> stage {STAGE_NAME} completed <<<<<<\n\nx==========x")
except Exception as e:
        logger.exception(e)
        raise e


# Model Trainer Stage
STAGE_NAME = "Model Trainer stage"
try: 
   logger.info(f"*******************")
   logger.info(f">>>>>> stage {STAGE_NAME} started <<<<<<")
   model_trainer = ModelTrainerTrainingPipeline()
   model_trainer.main()
   logger.info(f">>>>>> stage {STAGE_NAME} completed <<<<<<\n\nx==========x")
except Exception as e:
        logger.exception(e)
        raise e
     
     
# Model Evaluation Stage
STAGE_NAME = "Model Evaluation stage"
try: 
   logger.info(f"*******************")
   logger.info(f">>>>>> stage {STAGE_NAME} started <<<<<<")
   model_evaluation = ModelEvaluationTrainingPipeline()
   model_evaluation.main()
   logger.info(f">>>>>> stage {STAGE_NAME} completed <<<<<<\n\nx==========x")
except Exception as e:
        logger.exception(e)
        raise e