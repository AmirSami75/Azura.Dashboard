import { describe } from "node:test";

export interface todolistDataProps {
  id: number;
  title: string;
  date?: Date;
  priority: "extrime" | "moderate" | "low";
  description: string;
  image?: string;
}

const todolistData = [
  {
    id: 1,
    title: "مطالعه",
    date: "2026-02-12",
    priority: "extrime",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vel libero lobortis fringilla. Integer fermentum, mauris nec posuere consectetur, nisi ipsum dapibus felis, vitae facilisis nunc mauris id libero. Donec faucibus, mi sed tempus commodo, justo purus scelerisque lectus, sed convallis est tellus non justo. Curabitur tempor rutrum mauris, in ultricies justo dapibus sed. Fusce cursus mauris id nisl tempor, quis lacinia urna feugiat. Suspendisse potenti. Proin non dolor eu eros ullamcorper vestibulum. Duis gravida, dui a viverra facilisis, augue turpis Eleifend lectus, eget porttitor leo nibh id tortor.",
    image: "",
  },
  {
    id: 2,
    title: "مطالعه",
    date: "2026-02-12",
    priority: "extrime",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vel libero lobortis fringilla. Integer fermentum, mauris nec posuere consectetur, nisi ipsum dapibus felis, vitae facilisis nunc mauris id libero. Donec faucibus, mi sed tempus commodo, justo purus scelerisque lectus, sed convallis est tellus non justo. Curabitur tempor rutrum mauris, in ultricies justo dapibus sed. Fusce cursus mauris id nisl tempor, quis lacinia urna feugiat. Suspendisse potenti. Proin non dolor eu eros ullamcorper vestibulum. Duis gravida, dui a viverra facilisis, augue turpis Eleifend lectus, eget porttitor leo nibh id tortor.",
    image: "",
  },
  {
    id: 3,
    title: "مطالعه",
    date: "2026-02-12",
    priority: "extrime",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vel libero lobortis fringilla. Integer fermentum, mauris nec posuere consectetur, nisi ipsum dapibus felis, vitae facilisis nunc mauris id libero. Donec faucibus, mi sed tempus commodo, justo purus scelerisque lectus, sed convallis est tellus non justo. Curabitur tempor rutrum mauris, in ultricies justo dapibus sed. Fusce cursus mauris id nisl tempor, quis lacinia urna feugiat. Suspendisse potenti. Proin non dolor eu eros ullamcorper vestibulum. Duis gravida, dui a viverra facilisis, augue turpis Eleifend lectus, eget porttitor leo nibh id tortor.",
    image: "",
  },
  {
    id: 4,
    title: "مطالعه",
    date: "2026-02-12",
    priority: "extrime",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vel libero lobortis fringilla. Integer fermentum, mauris nec posuere consectetur, nisi ipsum dapibus felis, vitae facilisis nunc mauris id libero. Donec faucibus, mi sed tempus commodo, justo purus scelerisque lectus, sed convallis est tellus non justo. Curabitur tempor rutrum mauris, in ultricies justo dapibus sed. Fusce cursus mauris id nisl tempor, quis lacinia urna feugiat. Suspendisse potenti. Proin non dolor eu eros ullamcorper vestibulum. Duis gravida, dui a viverra facilisis, augue turpis Eleifend lectus, eget porttitor leo nibh id tortor.",
    image: "",
  },
  {
    id: 5,
    title: "مطالعه",
    date: "2026-02-12",
    priority: "extrime",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vel libero lobortis fringilla. Integer fermentum, mauris nec posuere consectetur, nisi ipsum dapibus felis, vitae facilisis nunc mauris id libero. Donec faucibus, mi sed tempus commodo, justo purus scelerisque lectus, sed convallis est tellus non justo. Curabitur tempor rutrum mauris, in ultricies justo dapibus sed. Fusce cursus mauris id nisl tempor, quis lacinia urna feugiat. Suspendisse potenti. Proin non dolor eu eros ullamcorper vestibulum. Duis gravida, dui a viverra facilisis, augue turpis Eleifend lectus, eget porttitor leo nibh id tortor.",
    image: "",
  },
  {
    id: 6,
    title: "مطالعه",
    date: "2026-02-12",
    priority: "extrime",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vel libero lobortis fringilla. Integer fermentum, mauris nec posuere consectetur, nisi ipsum dapibus felis, vitae facilisis nunc mauris id libero. Donec faucibus, mi sed tempus commodo, justo purus scelerisque lectus, sed convallis est tellus non justo. Curabitur tempor rutrum mauris, in ultricies justo dapibus sed. Fusce cursus mauris id nisl tempor, quis lacinia urna feugiat. Suspendisse potenti. Proin non dolor eu eros ullamcorper vestibulum. Duis gravida, dui a viverra facilisis, augue turpis Eleifend lectus, eget porttitor leo nibh id tortor.",
    image: "",
  },
  {
    id: 7,
    title: "مطالعه",
    date: "2026-02-12",
    priority: "extrime",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vel libero lobortis fringilla. Integer fermentum, mauris nec posuere consectetur, nisi ipsum dapibus felis, vitae facilisis nunc mauris id libero. Donec faucibus, mi sed tempus commodo, justo purus scelerisque lectus, sed convallis est tellus non justo. Curabitur tempor rutrum mauris, in ultricies justo dapibus sed. Fusce cursus mauris id nisl tempor, quis lacinia urna feugiat. Suspendisse potenti. Proin non dolor eu eros ullamcorper vestibulum. Duis gravida, dui a viverra facilisis, augue turpis Eleifend lectus, eget porttitor leo nibh id tortor.",
    image: "",
  },
];

export default todolistData;
