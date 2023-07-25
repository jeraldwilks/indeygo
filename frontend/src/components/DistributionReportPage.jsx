import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";

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

const DistributionReportPage = () => {
  return (
    <PDFDownloadLink document={<ReportPdf />} fileName="DistributionReport">
      {({ loading }) => (loading ? "Loading Report" : "Download Report")}
    </PDFDownloadLink>
  );
};

export default DistributionReportPage;

const ReportPdf = () => {
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
