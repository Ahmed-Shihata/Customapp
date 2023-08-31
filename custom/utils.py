import frappe


def custom_on_update(doc, method=None):
    frappe.msgprint(f"test on update override in python, doc name: {doc.name}")    