import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface City {
  location: {
    lat: string;
    lng: string;
  },
  id: string,
  political: {
    city: string;
    state: string;
    country: string;
  }
}

interface CitiesContextData {
  cities: City[];
  addCity(newCity: City): Promise<void>;
}

const CitiesContext = createContext<CitiesContextData>({} as CitiesContextData);

export const CitiesProvider: React.FC = ({ children }) => {
  const [cities, setcities] = useState<City[]>([] as City[]);

  useEffect(() => {
    const getCities = async () => {
      const jsonValue = await AsyncStorage.getItem('@wether:cities');

      if (jsonValue) {
        const parsedCities = JSON.parse(jsonValue);
        console.log('aqui', parsedCities);
        setcities(parsedCities);
      }
    }

    getCities();
  }, [])


  const addCity = useCallback(async (newCity: City) => {
    const newCities = [newCity, ...cities];

    setcities(newCities);

    console.log('chegou');

    const jsonValue = JSON.stringify(newCities);
    await AsyncStorage.setItem('@wether:cities', jsonValue);
  }, [cities]);

  return (
    <CitiesContext.Provider
      value={{ cities, addCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export function useCities(): CitiesContextData {
  const context = useContext(CitiesContext);

  if (!context) {
    throw new Error('useProfile must be used within as Profileprovider');
  }

  return context;
}
