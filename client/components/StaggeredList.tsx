import { ScrollView } from 'react-native'
import React from 'react'
import { View } from './Themed';
import Styles from '../constants/Styles';
import Spacer from './Spacer';

interface StaggeredListProps<T> {
    items: T[];
    builder: (item: T) => React.JSX.Element;
}

export default function StaggeredList<T>(props: StaggeredListProps<T>) {
    const { builder, items } = props;
    var index = -1;
    return (
        <ScrollView style={[Styles.page, Styles.container, {
            height: '100%',
        }]}>
            {chunkArray(items, 3).map(chunk => {
                const [item0, item1, item2] = chunk;
                return <View key={index++}
                    style={[
                        Styles.container,
                        { paddingBottom: 10, flexDirection: 'row', height: '50%' }
                    ]}>
                    <View style={[Styles.container, { height: '100%', width: '50%' }]}>
                        <View style={{ height: '100%', width: '100%' }}>{builder(item0)}</View>
                    </View>
                    <Spacer />
                    <View style={[
                        Styles.container,
                        {
                            flex: 1,
                            flexDirection: "column",
                            paddingBottom: 10,
                        }]}>
                        <View style={{ height: '50%' }}>{builder(item1)}</View>

                        {
                            item2 ? [
                                <Spacer key={`spacer${index}`} />,
                                <View key={`view${index}`} style={{ height: '50%' }}>
                                    {builder(item2)}
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