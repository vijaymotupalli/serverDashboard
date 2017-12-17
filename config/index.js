var config = {

    db: {
        host:'mongodb://127.0.0.1/videoupload',
        port: 27017,
        database: "videoupload",
        username:"testuser",
        password:"usertest"
    },
    server:{
      host:'localhost',
      port:'9000'

    },
email:{
        from:"ursvijay67@gmail.com",
        username:"ursvijay67@gmail.com",
        password:"9502982504",
        subjects:{
            password_reset:"Reset your Admin Password",
            suspicious_activity:"Suspicious Activity on your VR Science Account",
        }
    },
superAdmin:"SUPER_ADMIN",

    contentUploader:"CONTENT_UPLOADER",
    qlab:"QLAB",
    institute:"INSTITUTE",

    auth:{
        admin:{
            tokenExpiry : 365,
            authSecret: "videoupload",
        }
    },
    admin:{
        defaultPageLimit : 10,
        defaultPageNumber: 1
    },
    app:{
        defaultProductsLimit : 50,
        defaultPageNumber: 1
    },
    fileUpload:{
        uploadPath : 'static/uploads',
        downloadPath:'/uploads/'

    }
   



};

module.exports = config;
