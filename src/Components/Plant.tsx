import { Plant as PlantType } from "../Data/Plants"

interface Props {
    plant: PlantType;
}

export const Plant = ({ plant }: Props) => {
    return (
        <a href="#">
            <div><img src={plant.imageUrl} alt=""/></div>
            <h2>{plant.name}</h2>
            <p>
                {plant.description}
            </p>
        </a>
    );
};
