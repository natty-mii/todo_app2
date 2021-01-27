class CalendersController < ApplicationController
  before_action :set_calender, except: [:index, :new, :create]
  def index
    @calenders = Calender.includes(:todos).order('created_at DESC')
  end

  def new
    @calender = Calender.new
    @calender.todos.new
  end

  def create
    @calender = Calender.new(calender_params)
    if @calender.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit

  end

  def update
    if @calender.update(calender_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def destroy
    @calender.destroy
    redirect_to root_path
  end

  private

  def calender_params
    params.require(:calender).permit(:day, todos_attributes: [:sentence, :_destroy, :id])
  end

  def set_calender
    @calender = Calender.find(params[:id])
  end
end
