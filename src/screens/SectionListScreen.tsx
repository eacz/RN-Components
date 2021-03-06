import React, { useContext } from 'react'
import { View , SectionList, Text} from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import styles from '../themes/AppTheme'
import ListItemSeparator from '../components/ListItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin", ]
  },
  {
    casa: "Marvel Comics",
    data: ["Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", ]
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", ]
  }
];

const SectionListScreen = () => {
  const {theme: {colors: { background, text }}} = useContext(ThemeContext)
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      
      <SectionList 
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled
        sections={casas}

        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        SectionSeparatorComponent={() => <ListItemSeparator />}
        
        keyExtractor={(item, index) => item+index}
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: background}}> 
                  <HeaderTitle title={section.casa} /> 
          </View>
        )}
        renderItem={({item}) => <Text style={{color: text}} >{item}</Text>}
        renderSectionFooter={({section}) => <HeaderTitle title={`Total Casa: ${section.data.length}`} /> }
        ListFooterComponent={() => <HeaderTitle title={`Total Casas: ${casas.length}`} />}
      />
    </View>
  )
}

export default SectionListScreen
