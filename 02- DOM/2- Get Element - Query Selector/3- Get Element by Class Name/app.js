// ############################################################################################################
// Get Elements by Class Name. Returs node list. Can't iterate over it using forEach.
const specialItems = document.getElementsByClassName("special");
console.log(specialItems);
specialItems[0].style.backgroundColor = "cyan";
