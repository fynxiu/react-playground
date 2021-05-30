class Friend {
  constructor(name, id, age) {
    this.name = name;
    this.id = id;
    this.age = age;
    Object.seal(this);
  }
}

export default Friend;
