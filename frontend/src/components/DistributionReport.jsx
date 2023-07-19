import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const DistributionReport = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text>Section #1</Text>
        </View>
      </Page>
    </Document>
  );
};

export default DistributionReport;
