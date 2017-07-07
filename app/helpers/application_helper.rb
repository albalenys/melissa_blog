module ApplicationHelper
  def current_user
    @current_user ||= Admin.find_by_id(session[:admin_id])
  end
end
