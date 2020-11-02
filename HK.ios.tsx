import AppleHealthKit from 'rn-apple-healthkit';
import { Permissions } from 'rn-apple-healthkit/Constants/Permissions';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const styles = StyleSheet.create({
  textView: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 32,
    paddingHorizontal: 24,
  }});

const HKApp = () => {
  var [res, setRes] = useState(undefined)
  const PERMS = Permissions;
  const healthKitOptions = {
    permissions: {
      read: [
        PERMS.Age,
        PERMS.Weight,
      ],
      write: []
    }
  };

  AppleHealthKit.initHealthKit(healthKitOptions, (err, results) => {
    if (err) {
      console.log("error initializing Healthkit: ", err);
      return;
    }

    // Height Example
    AppleHealthKit.getDateOfBirth(null, (err, res) => {
      //console.log(results)

      //setRes(res)
    });

    AppleHealthKit.getLatestWeight(null, (err, resultDict) => {
      if ("value" in resultDict && resultDict["value"] !== res) {
        setRes(resultDict["value"])
      }

      //setRes(res["value"])
    })
  });
  return (
    <>
      <Text style={styles.textView}>{res}</Text>
      <Text style={styles.textView}>Hello</Text>
    </>
  )
} 

export default HKApp

