frappe.ui.form.on('ToDo', {
    onload: function (frm) {
        frappe.msgprint(`inside on load!`);
        frm.set_query("reference_type", function (txt) {
			return {
				filters: {
					issingle: 1,
				},
			};
		});
    },
    priority: function(frm) {
        if (frm.doc.priority == "Low"){
            testFunction(frm, frm.doc.priority);      
        }
    }
});

const testFunction = function(frm, crntValue){
    frappe.msgprint(`you selected: ${crntValue}`);
}