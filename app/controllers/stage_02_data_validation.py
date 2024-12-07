from app.config import ConfigurationManager
from app.services.data_validation import DataValidation

class DataValidationTrainingPipeline:
    def __init__(self):
        pass
    
    def main(self):
        try:
            config = ConfigurationManager()
            data_validation_config = config.get_data_validation_config()
            data_validation = DataValidation(config=data_validation_config)
            data_validation.validate_all_files_exist() 
        except Exception as e:
            raise e