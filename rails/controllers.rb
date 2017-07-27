# Strong params on keyed json

def buyer_transaction_params
  keys = params[:transactions].keys
  properties = [:email, :item_id, :amount, :success]
  all_permitted = keys.map{|key| {key => properties}}
  params.require(:transactions).permit(*all_permitted)
end
