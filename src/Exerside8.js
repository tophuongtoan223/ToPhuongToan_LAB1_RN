import React from "react";
import {StyleSheet, Text, SafeAreaView, View, SectionList } from "react-native"; 

const myStyle= StyleSheet.create(
    {
        row:{
            paddingHorizontal:10,
            paddingVertical:10
        },
        name:{
            fontSize:16,
        },
        separator:{
            backgroundColor:"aqua",
            height:1,
        },
        sectionHeader:{
            paddingHorizontal:10,
            paddingVertical:10,
            backgroundColor:"blue",
        }
    }
);
const groupPeopleByLastName = (_data) => {
    const data = [..._data];
    const groupedData = data.reduce((accumulator, item) => {
        const lastName = item.name.last;
        if (lastName) {
            const group = item.name.last[0].toUpperCase();

            if (accumulator[group]) {
                accumulator[group].data.push(item);
            } else {
                accumulator[group] = {
                    title: group,
                    data: [item],
                };
            }
        }
        return accumulator;
    }, {});

    const sections = Object.keys(groupedData).map((key) => {
        return groupedData[key];
    });

    return sections.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        }
        return -1;
    });
};
    
export default ()=>{
    return(
        <SafeAreaView>
            <SectionList
            sections={groupPeopleByLastName(PEOPLE)}
            keyExtractor={(item) => `${item.name.first}-${item.name.last}`} 
            renderSectionHeader={({ section }) => {
                return (
                    <View style={myStyle.sectionHeader}>
                        <Text>{section.title}</Text>
                    </View>
                );
            }}
            renderItem={({ item }) => {
                return (
                    <View style={myStyle.row}>
                        <Text style={myStyle.name}>
                             {item.name.first} {item.name.last}
                        </Text>
                    </View>
            );
            }}
            ItemSeparatorComponent={() => <View style={myStyle.separator} />}
            />
        </SafeAreaView>
    );
};
    const PEOPLE =[
        {
            name: {
                title: "Ms",
                first: "Maeva",
                last: "Scott",
            },
        },
        {
            name: {
                title: "Ms",
                first: "Maëlle",
                last: "Henry",
            },
        },
        {
            name: {
                title: "Mr",
                first: "Mohamoud", 
                last: "Faaij",
            },
        },
    ];