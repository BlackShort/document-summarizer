from app.config import ConfigurationManager
from app.services.data_transformation import DataTransformation

class DataTransformationTrainingPipeline:
    def __init__(self):
        pass
    
    def main(self):
        try:
            config = ConfigurationManager()
            data_transformation_config = config.get_data_transformation_config()
            data_transformation = DataTransformation(config = data_transformation_config)
            data_transformation.convert()
        except Exception as e:
            raise e