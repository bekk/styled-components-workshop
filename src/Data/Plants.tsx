export interface Plant {
    id: number;
    name: string;
    description: string;
    careInstructions: string[];
    water: string;
    imageUrl: string;
}

export const plants: Plant[] = [
    {
        id: 1,
        name: "Monstera Deliciosa",
        description:
            "The Monstera Deliciosa is a popular houseplant known for its large, glossy leaves. It is native to the rainforests of Central and South America.",
        careInstructions: [
            "Water once a week",
            "Place in bright, indirect sunlight",
            "Keep in a warm, humid environment",
        ],
        water: "weekly",
        imageUrl:
            "https://www.mestergronn.no/dw/image/v2/BFMT_PRD/on/demandware.static/-/Sites-product-catalog/no_NO/v1678952724901//mg-product-images/158437/158437_1.jpg?sw=800&sfrm=jpg&q=80",
    },
    {
        id: 2,
        name: "Snake Plant",
        description:
            "The Snake Plant, also known as Sansevieria, is a hardy and low-maintenance plant that can thrive in a variety of conditions. It is native to West Africa.",
        careInstructions: [
            "Water sparingly, only when soil is dry",
            "Can tolerate low light conditions",
            "Prefers well-draining soil",
        ],
        water: "when soil is dry",
        imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2022%2F09%2F21%2Feight-houseplants-that-thrive-in-low-light-8-0922-2000.jpg",
    },
    {
        id: 3,
        name: "Fiddle Leaf Fig",
        description:
            "The Fiddle Leaf Fig is a popular houseplant known for its large, violin-shaped leaves. It is native to tropical regions of Africa.",
        careInstructions: [
            "Water once a week, allowing soil to dry slightly between waterings",
            "Place in bright, indirect sunlight",
            "Avoid cold drafts and temperature fluctuations",
        ],
        water: "weekly",
        imageUrl:
            "https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-e1652800894846.jpg",
    },
    {
        id: 4,
        name: "Pothos",
        description:
            "The Pothos is a trailing vine plant that is easy to care for and can grow well in a variety of lighting conditions. It is native to the Solomon Islands.",
        careInstructions: [
            "Water when the top inch of soil feels dry",
            "Can tolerate low to bright, indirect sunlight",
            "Prefers well-draining soil",
        ],
        water: "weekly",
        imageUrl:
            "https://houseplantresourcecenter.com/wp-content/uploads/2020/09/severin-candrian-IZz3sboy1g8-unsplash-1.jpg",
    },

    {
        id: 5,
        name: "Spider Plant",
        description:
            "The Spider Plant is a popular houseplant known for its long, thin leaves and small white flowers. It is native to tropical and southern Africa.",
        careInstructions: [
            "Water once a week, allowing soil to dry slightly between waterings",
            "Prefers bright, indirect sunlight",
            "Thrives in humid environments",
        ],
        water: "weekly",
        imageUrl:
            "https://www.bhg.com/thmb/LrCakiEVtRCyslgobTNlo-suVMk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BHG-spider-plant-c0e0fdd5ec6e4c1588998ce3167f6579.jpg",
    },
    {
        id: 6,
        name: "ZZ Plant",
        description:
            "The ZZ Plant is a low-maintenance houseplant that can grow well in low light conditions. It is native to Eastern Africa.",
        careInstructions: [
            "Water sparingly, only when soil is dry",
            "Can tolerate low to bright, indirect sunlight",
            "Prefers well-draining soil",
        ],
        water: "when soil is dry",
        imageUrl:
            "https://assets.eflorist.com/site/32084100/assets/products/PZM_/sku4760119.png?1671473999666",
    },
];
