export var features = [
  {
    title: "Toilet",
    presence: true,
    icon: "fa fa-male fa-female",
    subfeatures: []
  },
  {
    title: "Pets allowed",
    presence: true,
    icon: "fa fa-paw",
    subfeatures: []
  },
  {
    title: "Shower",
    presence: false,
    icon: "fa fa-shower",
    subfeatures: [
      {
        title: "Outdoor shower",
        presence: false,
        subfeatures: []
      }
    ]
  },
  {
    title: "Trash",
    presence: true,
    icon: "fa fa-trash-o",
    subfeatures: [
      {
        title: "Recycling bin",
        presence: true,
        subfeatures: []
      },
      {
        title: "Compost bin",
        presence: true,
        subfeatures: []
      },
      {
        title: "Trash bin",
        presence: false,
        subfeatures: [
          {
            title: "Pack in, pack out",
            presence: true,
            subfeatures: []
          }
        ]
      }
    ]
  }
];
