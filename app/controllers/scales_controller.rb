class ScalesController < ApplicationController

  def index
    scales = Scale.all
    render json: scales, status: :ok
  end
  
  def show
    scale = Scale.find(params[:id])
    render json: scale
  end
end
