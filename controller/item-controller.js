const item_model = require("../model/item-model")

exports.itemsctrl = (req, res) => {
    item_model.itemsMdl((err, results) => {
        if (err) {
            console.log('Error fetching items:', err)
            return res.status(500).json({ message: "Database Error" })
        }
        return res.status(200).json({
            status: 200,
            data: results,
            message: "Items fetched successfully"
        });
    })
}

exports.measurementctrl = (req, res) => {
    item_model.measurementMdl((err, results) => {
        if (err) {
            console.log('Error fetching measurements:', err)
            return res.status(500).json({ message: "Database Error" })
        }
        return res.status(200).json({
            status: 200,
            data: results,
            message: "Measurements fetched successfully"
        });
    })
}

exports.submitItemsctrl = (req, res) => {

    const { month, selectedItems } = req.body;

    if (!selectedItems || selectedItems.length === 0) {
        return res.status(400).json({
            status: 400,
            message: "No items selected"
        });
    }

    const values = selectedItems.map(item => [
        item.item_id,
        item.english_name,
        item.telugu_name,
        item.quantity,
        item.measurement.measurement,
        month
    ]);

    item_model.submitItemsMdl(values, (err, results) => {

        if (err) {
            console.log("Insert Error:", err);
            return res.status(500).json({
                status: 500,
                message: "Database Error"
            });
        }

        return res.status(200).json({
            status: 200,
            message: "Items inserted successfully",
            results
        });
    });
};

exports.getOrdersByMonthctrl = (req, res) => {
    data = req.body;
    console.log('getOrdersByMonthctrl:', data)
    item_model.getOrdersByMonthMdl(data, (err, results) => {
        console.log('item_model.getOrdersByMonthMdl err:', err);
        console.log('item_model.getOrdersByMonthMdl results:', results);
        if (err) {
            console.log('Error fetching measurements:', err)
            return res.status(500).json({ message: "Database Error" })
        }
        return res.status(200).json({
            status: 200,
            data: results,
            message: "Measurements fetched successfully"
        });
    })
}