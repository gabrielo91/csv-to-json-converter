const { OBJtoXML } = require('./OBJtoXML');
const data = require('../data.json');

describe('test json to xml converter', () => {
  it('OBJtoXML should return the expected response', () => {
    const response = OBJtoXML(data);
    expect(response).toEqual(
      '<Entities><Demographics><Patient_Name>Jack Sparrow</Patient_Name><Patient_Phone>555-555-5555</Patient_Phone><Patient_Email>555-555-5555</Patient_Email><DOB>09/18/1985</DOB><Insurance_Provider>Blue Cross Blue Shield of Oklahoma</Insurance_Provider><Insurance_Policy_Number>YUP8357788</Insurance_Policy_Number><Referring_Physician>Dr. Block</Referring_Physician><Referring_Physician_email>block@block.com</Referring_Physician_email></Demographics><Clinical_Data><ICD10s><Description>Type 2 diabetes mellitus with diabetic peripheral angiopathy without gangrene</Description><Code>E11.51</Code><Score>0.8875475525856018</Score></ICD10s><ICD10s><Description>Type 2 diabetes mellitus with diabetic nephropathy</Description><Code>E11.21</Code><Score>0.7889286875724792</Score></ICD10s><ICD10s><Description>Type 1 diabetes mellitus with diabetic peripheral angiopathy without gangrene</Description><Code>E10.51</Code><Score>0.7600046992301941</Score></ICD10s><ICD10s><Description>Type 2 diabetes mellitus with other diabetic kidney complication</Description><Code>E11.29</Code><Score>0.7460819482803345</Score></ICD10s><Medications><Text>Levothyroxine</Text><DOSAGE>20 Milligrams</DOSAGE><ROUTE_OR_MODE>p.o.</ROUTE_OR_MODE><FREQUENCY>once daily</FREQUENCY></Medications><Medications><Text>Lisinipril</Text><DOSAGE>125 micrograms</DOSAGE><ROUTE_OR_MODE>p.o.</ROUTE_OR_MODE><FREQUENCY>once daily</FREQUENCY></Medications><Lab_Results><Type>PSA</Type><Result>4.2</Result><Date>10/01/2021</Date></Lab_Results><Lab_Results><Type>PSA</Type><Result>3.1</Result><Date>06/01/2021</Date></Lab_Results><Lab_Results><Type>Creatinine</Type><Result>0.7</Result><Date>9/01/2021</Date></Lab_Results><Lab_Results><Type>Creatinine</Type><Result>0.8</Result><Date>10/01/2021</Date></Lab_Results><Lab_Results><Type>Creatinine</Type><Result>1.1</Result><Date>11/01/2021</Date></Lab_Results></Clinical_Data></Entities>'
    );
  });
});
