import { Avatar, Button, Divider, Modal, NumberInput, Select, Table, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { IconEdit } from '@tabler/icons-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { doctorDepartments, doctorSpecializations } from '../../../Data/DropdownData';
import { useDisclosure } from '@mantine/hooks';


const doctor: any = {
  name: 'Dr. John Doe',
  email: 'dr.john.doe@example.com',
  dob: '1985-05-15', // format ISO YYYY-MM-DD
  phone: '+212 623-456-789',
  address: '123 Main St, City, Country',
  licenseNo: 'LIC-987654321',
  specialization: 'Cardiology',
  department: 'Cardiology Department',
  totalExp: 12, // en années
  profilePicture: 'avatar.png',
};


const Profile = () => {
  const user = useSelector((state: any) => state.user);
  const [opened, {open, close}] = useDisclosure(false);
  const [editMode, setEdit] = useState(false);
  return (
    <div className="p-10">
      <div className='flex justify-between items-center'>
        <div className="flex gap-5 items-center">
            <div className="flex flex-col items-center gap-3">

          <Avatar variant="filled" src="/avatar.png" size={150} alt="it's me" />
          {editMode && <Button size='sm' onClick={open} variant='filled'>Upload</Button>}

          </div>
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
              </Table.Td> : <Table.Td className="text-xl">{doctor.dob}</Table.Td>}
            </Table.Tr>
            <Table.Tr>
              <Table.Td className="font-semibold text-xl">Phone</Table.Td>
              {editMode? <Table.Td className="text-xl"> <NumberInput maxLength={10} clampBehavior="strict" placeholder="Phone number" hideControls/>
              </Table.Td>:<Table.Td className="text-xl">{doctor.phone}</Table.Td>}
            </Table.Tr>
            <Table.Tr>
              <Table.Td className="font-semibold text-xl">Address</Table.Td>
              {editMode? <Table.Td className="text-xl"> <TextInput  placeholder="Address" />
              </Table.Td>:<Table.Td className="text-xl">{doctor.address}</Table.Td>}
            </Table.Tr>
            <Table.Tr>
              <Table.Td className="font-semibold text-xl">License No</Table.Td>
              {editMode? <Table.Td className="text-xl"> <NumberInput maxLength={12} clampBehavior="strict" placeholder="License number" hideControls/>
              </Table.Td>:<Table.Td className="text-xl">{doctor.licenseNo}</Table.Td>}
            </Table.Tr>
            <Table.Tr>
              <Table.Td className="font-semibold text-xl">Specialization</Table.Td>
              {editMode? <Table.Td className="text-xl"> <Select placeholder="Specialization" data={doctorSpecializations}/>
              </Table.Td>:<Table.Td className="text-xl">{doctor.specialization}</Table.Td>}
            </Table.Tr>
            <Table.Tr>
              <Table.Td className="font-semibold text-xl">Department</Table.Td>
              {editMode? <Table.Td className="text-xl"> <Select placeholder="Department" data={doctorDepartments}/>
              </Table.Td>:<Table.Td className="text-xl">{doctor.department}</Table.Td>}
            </Table.Tr>
            <Table.Tr>
              <Table.Td className="font-semibold text-xl">
                Total Experience
              </Table.Td>
              {editMode? <Table.Td className="text-xl"> <NumberInput maxLength={2} max={50} clampBehavior="strict" placeholder="Total Experience" hideControls/>
              </Table.Td>:<Table.Td className="text-xl">{doctor.totalExp} years</Table.Td>}
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </div>

       <Modal centered opened={opened} onClose={close} title={<span className="text-xl font-medium">Upload Profile Picture</span>}>
       
      </Modal>         


    </div>
  );
};

export default Profile;
