class PrivateClassesController < ApplicationController
    def index
        private_classes = PrivateClass.all
        render json: private_classes, status: :ok
      end
      
      def show
        private_class = PrivateClass.find(params[:id])
        render json: private_class
      end
end
