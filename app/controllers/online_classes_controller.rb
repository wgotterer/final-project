class OnlineClassesController < ApplicationController

    def index
        online_classes = OnlineClass.all
        render json: online_classes, status: :ok
      end
      
      def show
        online_class = OnlineClass.find(params[:id])
        render json: online_class
      end
end
