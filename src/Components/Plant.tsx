import { Plant as PlantType } from "../Data/Plants"

interface Props {
    plant: PlantType;
}

export const Plant = ({ plant }: Props) => {
    return (
        <a href="#">
            <h2>{plant.name}</h2>
            <div><img src={plant.imageUrl} alt=""/></div>
            <p>
                {plant.description}
            </p>
        </a>
    );
};
