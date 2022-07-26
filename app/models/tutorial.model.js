module.exports = (mongoose, mongoosePaginate) => {
  var schema = mongoose.Schema(
    {
      title: { type: String, unique: true, required: true, dropDups: true },
      description: String,
      published: Boolean,
      img: String,
      url: String,
      date: { type: Date, index: true },
      newsOwner: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  schema.plugin(mongoosePaginate);

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
