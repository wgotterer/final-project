class UserOnlineClassesController < ApplicationController
    def index
        user_online_classes = UserOnlineClass.all 
        render json: user_online_classes, status: :ok
    end

    def create
        user_online_class = UserOnlineClass.create!(user_online_class_params)
        render json: user_online_class, status: :created
    end

    private

    def user_online_class_params
        params.permit(:user_id, :online_class_id)
    end
end
