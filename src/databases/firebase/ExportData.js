/* eslint-disable no-unused-vars */
import GetData from "../data/GetData.js";
import DBConnection from "./ConfigDB.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

const ProductsData = await GetData().then((response) => response);

async function cargarDatos(table, data) {
  console.clear();
  try {
    const collectionRef = collection(DBConnection, table);
    const productsList = await getDocs(collectionRef).then((response) => {
      return response.docs.map((doc) => {
        const item = { id: doc.id, ...doc.data() };
        return item;
      });
    });

    if (productsList.length > 0) {
      console.log(`Ya existen ${productsList.length} productos en la colección ${table}`);
      return;
    }

    console.log("Cargando los datos...");

    data.map(async (item, index) => {
      const product = {
        name: item.name,
        price: item.price,
        category: item.category,
        description: item.description,
        image: item.image,
        stock: item.stock,
      };

      try {
        await addDoc(collectionRef, product).then((response) => {
          console.log(`${index} Documento ${response.id} añadido a la colección ${table}`);
        });
      } catch (error) {
        console.error(`Error al añadir el documento a la colección ${table}:`, error);
        return;
      }
    });

    console.log("Datos Cargados con Éxito!");
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
}

await cargarDatos("Products", ProductsData);
