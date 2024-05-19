import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/table';
import { useTableState } from '@react-stately/table';

function CustomersPage() {
  let state = useTableState({
    columns: [
      { name: 'Name', key: 'name' },
      { name: 'Email', key: 'email' },
      // Diğer sütunlar...
    ],
    items: [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      // Diğer satırlar...
    ]
  });

  return (
    <Table aria-label="Example table with static content" state={state}>
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Email</TableColumn>
      </TableHeader>
      <TableBody>
        {state.collection.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default CustomersPage;
