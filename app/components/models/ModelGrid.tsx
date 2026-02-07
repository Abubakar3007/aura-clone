import ModelCard from "./ModelCard";

interface Model {
  id: string;
  name: string;
  city: string;
  image: string;
  gender: "women" | "men";
  stats: {
    height: string;
    chest: string;
    waist: string;
    hips: string;
    hair: string;
    eyes: string;
  };
}

const models: Model[] = [
  {
    id: "angela",
    name: "Angela",
    city: "Delhi",
    image: "https://images.squarespace-cdn.com/content/v1/63810cc8347e214d6a1808a3/781ce845-0278-48ac-8011-6ce2b344865d/model-portfolio-photographer-studio-plymouth-devon-3",
    gender: "women",
    stats: { height: "5'9\"", chest: '32"', waist: '24"', hips: '34"', hair: "Brown", eyes: "Green" },
  },
  {
    id: "marcus",
    name: "Marcus",
    city: "Mumbai",
    image: "https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-2-682x1024.jpg",
    gender: "men",
    stats: { height: "6'1\"", chest: '40"', waist: '32"', hips: '38"', hair: "Black", eyes: "Brown" },
  },
  {
    id: "sofia",
    name: "Sofia",
    city: "Kolkata",
    image: "https://img.freepik.com/free-photo/beautiful-woman-purple-sweater-skirt_1303-17487.jpg?semt=ais_user_personalization&w=740&q=80",
    gender: "women",
    stats: { height: "5'10\"", chest: '33"', waist: '24"', hips: '35"', hair: "Brown", eyes: "Hazel" },
  },
  {
    id: "james",
    name: "James",
    city: "Pune",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/62f41336102745.570f363248965.jpg",
    gender: "men",
    stats: { height: "6'0\"", chest: '38"', waist: '30"', hips: '36"', hair: "Brown", eyes: "Blue" },
  },
  {
    id: "sam",
    name: "Sam Kunal",
    city: "Gujrat",
    image: "https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-9-682x1024.jpg",
    gender: "men",
    stats: { height: "6'0\"", chest: '38"', waist: '30"', hips: '36"', hair: "Brown", eyes: "Blue" },
  },
  {
    id: "maya",
    name: "Maya",
    city: "Delhi",
    image: "https://bookartistsonline.weebly.com/uploads/2/2/4/5/22456530/whatsapp-image-2024-02-07-at-2-21-11-pm-1-orig-2_orig.jpeg",
    gender: "women",
    stats: { height: "5'11\"", chest: '32"', waist: '23"', hips: '34"', hair: "Black", eyes: "Brown" },
  },
  {
    id: "david",
    name: "David",
    city: "Punjab",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/62f41336102745.570f363248965.jpg",
    gender: "men",
    stats: { height: "6'2\"", chest: '42"', waist: '33"', hips: '39"', hair: "Brown", eyes: "Green" },
  },
  {
    id: "vikram",
    name: "Vikram",
    city: "Delhi",
    image: "https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-2-682x1024.jpg",
    gender: "men",
    stats: { height: "6'2\"", chest: '42"', waist: '33"', hips: '39"', hair: "Brown", eyes: "Green" },
  },
];

interface ModelGridProps {
  filter?: "women" | "men" | "all";
}

const ModelGrid = ({ filter = "all" }: ModelGridProps) => {
  const filteredModels = filter === "all" ? models : models.filter((model) => model.gender === filter);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-12">
      {filteredModels.map((model, index) => (
        <div
          key={model.id}
          className="opacity-0 animate-fade-up"
          style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
        >
          <ModelCard {...model} />
        </div>
      ))}
    </div>
  );
};

export default ModelGrid;
