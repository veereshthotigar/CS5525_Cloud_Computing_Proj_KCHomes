
module.exports = function (app, db) {
    let demolition = db.model('demolition');
    let buy_sell = db.model('buy_sell');

    //api to search  details
    app.get('/search',(req,res)=>{
        let search_text = req.query.searchtext;
        let search_by = req.query.searchby;
        let query = {};

        query[search_by] = { $regex: search_text, $options: 'i' };
        demolition.find(query).exec((err, res_data_) => {
            if (!err) {
                res.send({
                    result: "Success",
                    data: res_data
                });
            } else {
                res.status(400).send({
                    result: "Failure",
                    message: "Error in fetching  list",
                    error: err.message
                });
            }
        });
    });

    app.get('/buy',(req,res)=>{
        let search_text = req.query.searchtext;
        let search_by = req.query.searchby;
        let query = {};

        query[search_by] = { $regex: search_text, $options: 'i' };
        buy_sell.find(query).exec((err, res_data_) => {
            if (!err) {
                res.send({
                    result: "Success",
                    data: res_data
                });
            } else {
                res.status(400).send({
                    result: "Failure",
                    message: "Error in fetching  list",
                    error: err.message
                });
            }
        });
    });

    app.post('/sell',(req,res)=>{
        let info = req.body;
        let buy_sell_schema = new buy_sell({
            type: info.type,
            address1:info.address1,
            address2:info.address2 || "",
            city:info.city,
            state:info.state,
            country:info.country,
            zipcode:info.zipcode,
            contact_ph:info.contact_ph || "",
            contact_email:info.contact_email || "",
            isRent:info.isRent || "yes",
            isSell:info.isSell || "no",
            cost:info.cost || 0,
            description:info.description,
            laundry: info.laundry || "Info not available",
            heating: info.heating || "Info not available",
            cooling: info.cooling || "Info not available",
            pets: info.pets || "Info not available",
            parking: info.parking || "Info not available",
            no_of_bedrooms:info.no_of_bedrooms,
            no_of_bathrooms:info.no_of_bathrooms,
            interior_livable_area:info.interior_livable_area,
            home_condition:info.home_condition,
            utilities:info.utilities,
            is_pets_allowed:info.is_pets_allowed,
            nearby_schools:info.nearby_schools,
            nearby_hospitals:info.nearby_hospitals,
            nearby_hotels: info.nearby_hotels,
            nearby_grocerry_shops:info.nearby_grocerry_shops,
            nearby_shopping:info.nearby_shopping,
            latitude:info.latitude,
            longtitude:info.longtitude,
            created_on:new Date(),
            updated_on:new Date()
        });
        buy_sell_schema.save((err, events_res) => {
            if (!err) {
                res.send({
                    result: "Success",
                    message: "Details saved successfully"
                });
            } else {
                res.status(400).send({
                    result: "Failure",
                    message: "Error in creating event",
                    error: err.message
                });
            }
        })
    });
};