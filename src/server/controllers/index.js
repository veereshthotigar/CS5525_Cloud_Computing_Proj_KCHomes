
module.exports = function (app, db) {
    let demolition = db.model('demolition');
    //api to search  details
    app.get('/search',(req,res)=>{
        let search_text = req.query.searchtext;
        let search_by = req.query.searchby;
        let query = {};
        query[search_by] = { $regex: search_text, $options: 'i' };
        demolition.find(query).exec((err, students) => {
            if (!err) {
                res.send({
                    result: "Success",
                    data: students
                });
            } else {
                res.status(400).send({
                    result: "Failure",
                    message: "Error in fetching students list",
                    error: err.message
                });
            }
        });
    });
};