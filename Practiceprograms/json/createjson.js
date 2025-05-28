// javascript function to create a json object with name and age properties
function createJson(name, age) {
    // Create a JSON object with the provided name and age
    // this is called object literal notation
    const jsonObject = {
        name: name,
        age: age
    };
    let name1 = jsonObject.name
    let age1 = jsonObject.age;
    console.log("JSON Object name value:", name1);
    console.log("JSON Object age value:", age1);
    // Convert the JSON object to a string
    const jsonString = JSON.stringify(jsonObject);
    console.log("JSON String:", jsonString);
    // Return the JSON string
    return jsonString;
}
createJson("Sandeep", 45);