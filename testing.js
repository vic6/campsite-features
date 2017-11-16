var features = [
  {
    title: "Toilet",
    presence: true,
    subfeatures: []
  },
  {
    title: "Pets allowed",
    presence: true,
    subfeatures: []
  },
  {
    title: "Shower",
    presence: false,
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

// [{obj}]
function subFeature(sub) {
};


function getSubFeatures(feature) {
  for(item of feature) {
    var subfeatures = [];
    if(item.subfeatures.length > 0){
      var sub = item.subfeatures;
      subfeatures.push(sub);
      getSubFeatures(sub);
    }
    console.log(item.title);
    console.log(subfeatures);
  }
}

getSubFeatures(features);
//console.log(getSubFeatures(features));
//console.log(subfeatures);
