var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
    name: "Clouds Rest",
    image: "https://images.unsplash.com/photo-1528433556524-74e7e3bfa599?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4479c0b22e5c8a8ed5577c39f63b27b&auto=format&fit=crop&w=400&q=60",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque ipsum, posuere sit amet tortor eget, pharetra porta eros. Duis auctor, enim ut tempor lacinia, nisl erat imperdiet metus, varius varius magna sem accumsan magna. Phasellus vehicula augue justo, non pretium mi luctus non. Phasellus dignissim odio sed felis malesuada consequat. Sed in magna vel ligula pulvinar fermentum. Pellentesque pulvinar molestie tortor in rutrum. Morbi consequat, tortor ac ultricies aliquet, augue mi volutpat felis, sed iaculis felis elit at enim. Duis sit amet enim condimentum, condimentum nibh vitae, posuere dolor. Nam ac magna sed neque dignissim tristique. Donec egestas feugiat dolor, eu dignissim mi posuere eu. Maecenas vitae molestie ex."
    },
    {
    name: "Big Tree Campground",
    image: "https://images.unsplash.com/photo-1534880606858-29b0e8a24e8d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=890e75a342e46be601584be1318ba5db&auto=format&fit=crop&w=400&q=60",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque ipsum, posuere sit amet tortor eget, pharetra porta eros. Duis auctor, enim ut tempor lacinia, nisl erat imperdiet metus, varius varius magna sem accumsan magna. Phasellus vehicula augue justo, non pretium mi luctus non. Phasellus dignissim odio sed felis malesuada consequat. Sed in magna vel ligula pulvinar fermentum. Pellentesque pulvinar molestie tortor in rutrum. Morbi consequat, tortor ac ultricies aliquet, augue mi volutpat felis, sed iaculis felis elit at enim. Duis sit amet enim condimentum, condimentum nibh vitae, posuere dolor. Nam ac magna sed neque dignissim tristique. Donec egestas feugiat dolor, eu dignissim mi posuere eu. Maecenas vitae molestie ex."
    },
    {
    name: "Milky Way Camp",
    image: "https://images.unsplash.com/photo-1531097517181-3de20fd3f05c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=21e8b8882ebe52dd2cea9022b73b9861&auto=format&fit=crop&w=400&q=60",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque ipsum, posuere sit amet tortor eget, pharetra porta eros. Duis auctor, enim ut tempor lacinia, nisl erat imperdiet metus, varius varius magna sem accumsan magna. Phasellus vehicula augue justo, non pretium mi luctus non. Phasellus dignissim odio sed felis malesuada consequat. Sed in magna vel ligula pulvinar fermentum. Pellentesque pulvinar molestie tortor in rutrum. Morbi consequat, tortor ac ultricies aliquet, augue mi volutpat felis, sed iaculis felis elit at enim. Duis sit amet enim condimentum, condimentum nibh vitae, posuere dolor. Nam ac magna sed neque dignissim tristique. Donec egestas feugiat dolor, eu dignissim mi posuere eu. Maecenas vitae molestie ex."
    }
];

function seedDB(){
    //Remove all campgrounds 
    Campground.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed campgrounds!");
            //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        //add a comment
                        Comment.create(
                            {
                                text: "This place is great, but i wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                   campground.comments.push(comment);
                                   campground.save();
                                   console.log("Create new comment");
                                }
                            });
                    }
                });
            });
        }
    });


    
}

module.exports = seedDB;