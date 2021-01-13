import React from 'react';
import { Movie } from './movie'
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ fontSize: 36, color: 'white' }}>Movies</Text>
          <Movie date='Dec 6, 2019' name='Portrait of the Lady on Fire' uri='https://resizing.flixster.com/STtbvrz38yiVCGUPsLzpLnpMB20=/206x305/v2/https://resizing.flixster.com/iqb6t6zZ_uFr3NiRLogDInFDqXE=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzM5ZGMxMjZhLWZmYzYtNGQ5ZC05NmFjLTUwNWQ1YWU3NzQ1NC53ZWJw' rating='98%' />
          <Movie date='Jan 10, 2020' name='1917' uri='https://resizing.flixster.com/zEV8wsM24IRUtg2-gIte0QA8e1k=/fit-in/200x296.2962962962963/v1.bTsxMzIwMzIxOTtqOzE4NjkyOzEyMDA7Mjc2NTs0MDk2' rating='88%' />
          <Movie date='Feb 28, 2020' name='The Invisible Man' uri='https://resizing.flixster.com/ZDisBvib7RW1HNgjRkzp1Tty9zM=/206x305/v2/https://resizing.flixster.com/Uolvsd73gtBbxnVk_rWpshGLnHU=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2Y1NmMxNDFkLTc5M2MtNDdiZS1iZTcwLWIxZGRiYTg2YTMzZi53ZWJw' rating='89%' />
          <Movie date='Nov 25, 2020' name="Ma Rainey's Black Bottom" uri='https://resizing.flixster.com/7wSBBOFgQTQKgdDU3NLd6FORv48=/206x305/v2/https://resizing.flixster.com/FDQKWCR1Noyw8CUCz7MAtLyXcx4=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzg2MTk4MGE1LWE1NGYtNDliYi05MWVlLTk2ZTRlMmQyMzE0My5qcGc=' rating='91%' />
          <Movie date='Dec 25, 2020' name='Soul' uri='https://resizing.flixster.com/KPJ9M0gryFbvakft7M5ecvFV5yE=/206x305/v2/https://resizing.flixster.com/skDbQNFUeYjoY0B6uvtSicszwYM=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2E3NTJkZGFlLTA4MTQtNDQ1Ny1hYWRhLTMxMjJlNzI2ZGQxZC5qcGc=' rating='98%' />
          <Movie date='Mar 13, 2020' name='Never Rarely Sometimes Always' uri='https://resizing.flixster.com/lrK2Wht1NDUdT9SVTPbYkB2sWaA=/206x305/v2/https://resizing.flixster.com/e3WIaW4l_8TaczKdPBo-9DP1xI0=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzM3Y2ZiZmZlLTQ4MWItNGNhMi04YjVlLTI2ODE1NTZhYzdkYS53ZWJw' rating='99%' />
          <Movie date='Feb 19, 2021' name='Nomadland' uri='https://resizing.flixster.com/Ma14G6pxdoHRlcPn-VDetEx-R8M=/206x305/v2/https://resizing.flixster.com/FPxMKMvyXa4t5krjfqA-6mcZ044=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzJjOWRjNGVkLTIwNDAtNDlmZS04MDM5LTNjYzM0ZDFlODhhMy5qcGc=' rating='97%' />
          <Movie date='Jul 3, 2020' name='Hamilton' uri='https://resizing.flixster.com/rcqtoRKgfSgXmTDHlO-dHoww1tw=/206x305/v2/https://resizing.flixster.com/xIuinui_7b_kLbzAaRkY8WgKPrk=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzBkZGQyODI0LTY4MDYtNDM4MC1iYWFlLTdkMzQwYzc5MzVlMi53ZWJw' rating='98%' />
          <Movie date='Nov 20, 2020' name='Sound Of Metal' uri='https://resizing.flixster.com/22M7mGzVx2T7BZ7pDgVZJXPK6Iw=/206x305/v2/https://resizing.flixster.com/sMugtzAYIhlair53big0CDWxty8=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzZmY2YwNDVjLWQ5NzctNDI3ZS1hZjc0LWU5NGU5ZmRlMzhkYS5wbmc=' rating='97%' />
          <Movie date='Jun 13, 2020' name='Da 5 Bloods' uri='https://resizing.flixster.com/qRJR3SQZ5Ychp8T3oAyzic2OAzs=/206x305/v2/https://resizing.flixster.com/rLkysn4TqQH7Iu_8rxVoMFj3r1c=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2IyN2ZiYWU2LTY3ZmYtNDNmYS05MDBjLTU1N2IxMmE3Y2RlOS53ZWJw' rating='92%' />
          <Movie date='Jun 19, 2020' name='Miss Juneteenth' uri='https://resizing.flixster.com/OI6kn42GP6ZQ9Ug6ASzrj11xafs=/206x305/v2/https://resizing.flixster.com/cM3q2eSrgqi6Nt81N3Gz0jAL5yM=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2E4OTllMWU0LTIwMDgtNDQwNS1iNDFiLThkZDIyMTM5YTJlNC53ZWJw' rating='100%' />
          <Movie date='Dec 25, 2020' name='One Night In Miami' uri='https://resizing.flixster.com/kPbgierdDFHxiwWoUMo5vUnpDaI=/206x305/v2/https://resizing.flixster.com/AaH1jJk0htUa6MQVoFU2TEEqPmI=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2NjNDY4ODU3LTRhODMtNDY2NS04YzE1LTFhYWQzMTdkYThkNy5qcGc=' rating='98%' />
          <Movie date='Nov 13, 2020' name='WolfWalkers' uri='https://resizing.flixster.com/0BxED326ymkPbqQBlqusS_0wRXg=/206x305/v2/https://resizing.flixster.com/rpHo7PL7EzMkN6hq3z9hmY6DL6A=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2QyYmExOTA2LWNhZmUtNDIxZS1iMzU1LWIwODg4Y2NiZjRlYy5qcGc=' rating='99%' />
          <Movie date='Oct 30, 2020' name='His Hous' uri='https://resizing.flixster.com/S7NdVRS0vWbXIrje09nHCsYo4qY=/206x305/v2/https://resizing.flixster.com/LW0DoPE6lDJf9lcE05i_L0Y-GAY=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2UzY2U2OGZiLTBlN2UtNDUxMi1iMmI0LTFkYTFiYzBlYzA1MC5qcGc=' rating='100%' />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3a3a3a',
    paddingBottom: 20
  }
})

export default App;
