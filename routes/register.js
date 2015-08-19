/**
 * This JavaScript file is for verifying and providing the registerataion actions.
 * Here the data from the front end is to be processed and stored in the database.
 */
var mysql=require('mysql');
var util = require('util');
var dataPool=require('../routes/ConnectionPooling');
var controller = require('../routes/ControlCenter');

exports.confirmIndividualUser = function(req, res){

	var email=req.param('emailid');
	var nodemailer=require('nodemailer');

	var ind_first_name = req.param("firstname");
	console.log(ind_first_name);
	

	var ind_last_name = req.param("lastname");
	console.log(ind_last_name + ",");

	var ind_email_address = req.param("emailid");
	console.log(ind_email_address + ",");

	var ind_phone_number = req.param("phone");
	console.log(ind_phone_number + ",");

	var ind_password = req.param("password");
	console.log(ind_password + ",");

	/*var ind_corp_id = req.param("corporate");
	console.log(ind_corp_id + ",");*/

	/*var ind_address = req.param("address");
	console.log(ind_address + ",");*/
	//var ind_address=1;


	controller.registerIndividualUser(function(err){
		if(err)
		{
			console.log("error:" + err);
		}
		else
		{
			console.log("success");
			res.send("Successfully inserted indvidual user");
		}
	},ind_first_name,ind_last_name,ind_email_address,ind_phone_number,ind_password);
	/*var ind_address = req.param("address");
	console.log(ind_address + ",");
	if(ind_address)
	{
		var streetnumber=req.param("streetnumber");
		console.log(streetnumber + ",");
		var streetname=req.param("streetname");
		console.log(streetname + ",");
		var majormunicipality=req.param("majormunicipality");
		console.log(majormunicipality + ",");
		var postalcode=req.param("postalcode");
		console.log(postalcode + ",");
		var country=req.param("country");
		console.log(country + ",");
		var streettype=req.param("streettype");
		console.log(streettype+",");

	}*/


	/*
	var transporter = nodemailer.createTransport({
		service: 'yahoo',
		auth: {
			user: 'ruber_mod@yahoo.com',
			pass: 'Conf@123'
		}
	});
	console.log(email);
	var mailOptions = {
		    from: 'Ruber  <ruber_mod@yahoo.com>', // sender address
		    to: email, // list of receivers
		    subject: 'Thank you for account creation ', // Subject line
		    text: 'Hello, \n Thank you for creating you account.\n Please confirm your account details by clicking below. ', // plaintext body
		   
		};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	  ,var ind_corp_id = req.param("corporate");
	console.log(ind_corp_id + ",");
  }else{
	        console.log('Message sent: ' + info.response);
	    }
	});*/
	
	//res.send(" Please check your email");
	
};

exports.confirmCorporateUser = function(req, res){
	var email=req.param('emailid');
	var nodemailer=require('nodemailer');
	
	var transporter = nodemailer.createTransport({
		service: 'yahoo',
		auth: {
			user: 'ruber_mod@yahoo.com',
			pass: 'Conf@123'
		}
	});
	console.log(email);
	var mailOptions = {
		    from: 'Ruber  <ruber_mod@yahoo.com>', // sender address
		    to: email, // list of receivers
		    subject: 'Thank you for account creation ', // Subject line
		    text: 'Hello, \n Thank you for creating you account. \n Please confirm your account details by clicking below. ', // plaintext body
		   
		};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' + info.response);
	    }
	});
	
	res.send(" Please check your email");
	
};

exports.confirmCorporateAdmin = function(req, res){

	var email=req.param('emailid');
	var nodemailer=require('nodemailer');

	var ind_first_name = req.param("firstname");
	console.log(ind_first_name);
	

	var ind_last_name = req.param("lastname");
	console.log(ind_last_name + ",");

	var ind_email_address = req.param("emailid");
	console.log(ind_email_address + ",");

	var ind_phone_number = req.param("phone");
	console.log(ind_phone_number + ",");

	var ind_password = req.param("password");
	console.log(ind_password + ",");

	var ind_corp_id = req.param("corporate");
	console.log(ind_corp_id + ",");

	/*var ind_address = req.param("address");
	console.log(ind_address + ",");
	if(ind_address)
	{
		var streetnumber=req.param("streetnumber");
		console.log(streetnumber + ",");
		var streetname=req.param("streetname");
		console.log(streetname + ",");
		var majormunicipality=req.param("majormunicipality");
		console.log(majormunicipality + ",");
		var postalcode=req.param("postalcode");
		console.log(postalcode + ",");
		var country=req.param("country");
		console.log(country + ",");
		var streettype=req.param("streettype");
		console.log(streettype+",");

	}*/


	/*
	var transporter = nodemailer.createTransport({
		service: 'yahoo',
		auth: {
			user: 'ruber_mod@yahoo.com',
			pass: 'Conf@123'
		}
	});
	console.log(email);
	var mailOptions = {
		    from: 'Ruber  <ruber_mod@yahoo.com>', // sender address
		    to: email, // list of receivers
		    subject: 'Thank you for account creation ', // Subject line
		    text: 'Hello, \n Thank you for creating you account.\n Please confirm your account details by clicking below. ', // plaintext body
		   
		};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' + info.response);
	    }
	});*/
	
	res.send(" Please check your email");
	
};

exports.confirmExpertUser = function(req, res){

	var email=req.param('emailid');
	var nodemailer=require('nodemailer');




	/*var transporter = nodemailer.createTransport({
		service: 'yahoo',
		auth: {
			user: 'ruber_mod@yahoo.com',
			pass: 'Conf@123'
		}
	});
	console.log(email);
	var mailOptions = {
		    from: 'Ruber  <ruber_mod@yahoo.com>', // sender address
		    to: email, // list of receivers
		    subject: 'Thank you for account creation ', // Subject line
		    text: 'Hello, \n Thank you for creating you account. \n Please confirm your account details by clicking below. ', // plaintext body
		   
		};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' + info.response);
	    }
	});*/
	
	res.send(" Please check your email");
	
};
