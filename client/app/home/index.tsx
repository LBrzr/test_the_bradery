import React, { useEffect, useState } from 'react'
import { View, Text } from '../../components/Themed';
import Styles from '../../constants/Styles';
import { values as Strings } from '../../constants/strings'
import { fetchProducts } from '../../services/product';
import ProductTile from '../../components/tile/product';
import { ScrollView } from 'react-native-gesture-handler';
import Spacer from '../../components/Spacer';

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetchProducts().then((result) => {
            if (result.error) {

            } else {
                setProducts(result.data!);
            }
        });
    }, []);
    return (
        <ScrollView style={[Styles.page, Styles.container]}>
            {chunkArray(products, 3).map(chunk => {
                const [prod0, prod1, prod2] = chunk;
                return <View style={[
                    Styles.container,
                    { paddingBottom: 10, flexDirection: 'row', height: 500 }
                ]}>
                    <View style={[
                        Styles.container,
                        { height: '100%', width: '50%' }
                    ]}>
                        <ProductTile product={prod0} />

                    </View>
                    <Spacer />
                    <View
                        style={[
                            Styles.container, {
                                flex: 1,
                                flexDirection: "column",
                                paddingBottom: 10,
                            },
                        ]}
                    >
                        <View style={{ height: '50%' }}>
                            <ProductTile product={prod1} />
                        </View>

                        {
                            prod2 ? [
                                <Spacer />,
                                <View style={{ height: '50%' }}>
                                    <ProductTile product={prod2} />
                                </View>
                            ]
                                : <View />
                        }

                    </View>
                </View>;
            })}
        </ScrollView>
    )
}

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const chunks = Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, index) =>
        array.slice(index * chunkSize, (index + 1) * chunkSize)
    );

    return chunks;
}