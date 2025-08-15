import { Avatar, Button, Divider, NumberInput, Select, Table, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { IconEdit } from '@tabler/icons-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { bloodGroups } from '../../../Data/DropdownData';

const patient: any = {
  name: 'John Doe',
  email: '',
  dob: '1990-01-01',
  phone: '123-456-7890',
  address: '123 Main St, City, Country',
  cniNo: '1234-5678-9012',
  bloodGroup: 'O+',
  allergies: 'Peanuts',
  chronicDiseases: 'Diabetes',
  profilePicture: '/avatar.png',
};

const Profile = () => {
  const user = useSelector((state: any) => state.user);
  const [editMode, setEdit] = useState(false);
  return (
    <div className="p-10">
      <div className='flex justify-between items-center'>
        <div className="flex gap-5 items-center">
          <Avatar variant="filled" src="/avatar.png" size={150} alt="it's me" />
          <div className="flex flex-col gap-3">
            <div className="text-3xl font-medium text-neutral-900">
              {user.name}
            </div>
            <div className="text-xl text-neutral-700">{user.email}</div>
          </div>
        </div>
        {!editMode?<Button size='lg' onClick={()=>setEdit(true)} variant='filled' leftSection={<IconEdit />}>Edit</Button>:
        <Button size='lg' onClick={()=>setEdit(false)} variant='filled'>Submit</Button>}
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-2xl font-medium mb-5 text-neutral-900">
          Personal Information
        </div>
        <Table
          striped
          stripedColor="primary.1"
          verticalSpacing="md"
          withColumnBorders={false}>
          <Table.Tbody className="[&>tr]:!mb-3">
            <Table.Tr>
              <Table.Td className="font-semibold text-xl">Date of Birth</Table.Td>
              {editMode? <Table.Td className="text-xl"> <DateInput placeholder="Date of birth" />
              </Table.Td> : <Table.Td className="text-xl">{patient.dob}</Table.Td>}
            </Table.Tr>
            <Table.Tr>
              <Table.Td className="font-semibold text-xl">Phone</Table.Td>
              {editMode? <Table.Td className="text-xl"> <NumberInput maxLength={10} clampBehavior="strict" placeholder="Phone number" hideControls/>
              </Table.Td>:<Table.Td className="text-xl">{patient.phone}</Table.Td>}
            </Table.Tr>
            <Table.Tr>
              <Table.Td className="font-semibold text-xl">Address</Table.Td>
              {editMode? <Table.Td className="text-xl"> <TextInput  placeholder="" />
              </Table.Td>:<Table.Td className="text-xl">{patient.address}</Table.Td>}
            </Table.Tr>
            <Table.Tr>
              <Table.Td className="font-semibold text-xl">Cni No</Table.Td>
              {editMode? <Table.Td className="text-xl"> <NumberInput maxLength={12} clampBehavior="strict" placeholder="Aadhar number" hideControls/>
              </Table.Td>:<Table.Td className="text-xl">{patient.cniNo}</Table.Td>}
            </Table.Tr>
            <Table.Tr>
              <Table.Td className="font-semibold text-xl">Blood Group</Table.Td>
              {editMode? <Table.Td className="text-xl"> <Select data={bloodGroups}/>
              </Table.Td>:<Table.Td className="text-xl">{patient.bloodGroup}</Table.Td>}
            </Table.Tr>
            <Table.Tr>
              <Table.Td className="font-semibold text-xl">Allergies</Table.Td>
              {editMode? <Table.Td className="text-xl"> <TextInput  placeholder="" />
              </Table.Td>:<Table.Td className="text-xl">{patient.allergies}</Table.Td>}
            </Table.Tr>
            <Table.Tr>
              <Table.Td className="font-semibold text-xl">
                Chronic Diseases
              </Table.Td>
              {editMode? <Table.Td className="text-xl"> <TextInput  placeholder="" />
              </Table.Td>:<Table.Td className="text-xl">{patient.chronicDiseases}</Table.Td>}
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Profile;
