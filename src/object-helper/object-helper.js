export let updateObjectInArray = (items , itemID , objPropName , newObjProps) => {
  return items.map(users => {
    if (users[objPropName]=== itemID) {
      return {
        ...users,
        ...newObjProps
      }
    }
    return users;
  })
}