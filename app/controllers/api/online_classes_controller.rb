class Api::OnlineClassesController < ApplicationController
  before_action :authorize

    def index
        online_classes = OnlineClass.all
        render json: online_classes, status: :ok
      end
      
      def show
        online_class = OnlineClass.find(params[:id])
        render json: online_class
      end

      def destroy
        online_class = OnlineClass.find(params[:id])
        online_class.destroy
        head :no_content
      end

      def update
        online_class = OnlineClass.find(params[:id])
        online_class.update!(online_class_params)
        render json: online_class, status: :ok
      end

      private

      def online_class_params
        params.permit(:available, :name, :price, :difficulty, :description)
      end

      def authorize 
        return render json: { error: "Please log in or sign up" }, status: :unauthorized unless session.include? :user_id
      end
end
