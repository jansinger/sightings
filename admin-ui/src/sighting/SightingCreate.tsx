import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SightingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="location" source="location" />
        <TextInput label="locationText" source="locationText" />
      </SimpleForm>
    </Create>
  );
};
