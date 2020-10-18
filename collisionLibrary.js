function hasCollided(object1,object2) {  // wall is 1 car is 2
    if(object1.x - object2.x < (object1.width + object2.width)/2 && object2.x - object1.x < (object1.width + object2.width)/2) {
        return true;
    }
    else {
        return false;
    }
}