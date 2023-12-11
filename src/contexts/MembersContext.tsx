import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

export type Member = {
  id: string;
  name: string;
  type: "fisica" | "juridica";
  doc: string;
  birth: string;
  income?: number;
  phone?: string;
};

type CreateOrEditMemberData = Omit<Member, "id">;

type Feedback = {
  type: "add" | "edit";
  message: string;
};

type MembersState = {
  members: Member[];
  error: string;
  feedback: Feedback | null;
  addNewMember: (data: CreateOrEditMemberData) => void;
  editMember: (data: CreateOrEditMemberData) => void;
  removeMember: (data: Member) => void;
  clearFeedBackAndErrors: () => void;
};

type MembersProviderProps = {
  children: ReactNode;
};

const MembersContext = createContext<MembersState | null>(null);

function MembersProvider({ children }: MembersProviderProps) {
  const storagedMembers = localStorage.getItem("members");
  const membersObject = storagedMembers ? JSON.parse(storagedMembers) : [];

  const [members, setMembers] = useState<Member[]>(membersObject);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const membersString = JSON.stringify(members);
    localStorage.setItem("members", membersString);
  }, [members]);

  const addNewMember = useCallback(
    (data: CreateOrEditMemberData) => {
      const isRegistered = members.findIndex((m) => m.doc === data.doc) !== -1;
      const id = String(new Date().getTime());

      const newMember: Member = {
        id,
        name: data.name,
        type: data.type,
        doc: data.doc,
        birth: data.birth,
        income: data.income,
        phone: data.phone,
      };

      if (isRegistered) {
        setError("Cooperado já cadastrado!");
        return;
      }

      setMembers((previousMembers) => [newMember, ...previousMembers]);
      setError("");
      setFeedback({
        type: "add",
        message: "Cooperado cadastrado com sucesso!",
      });
    },
    [members],
  );

  const editMember = useCallback(
    (data: CreateOrEditMemberData) => {
      const currentMembers = members.map((m) => {
        if (m.doc === data.doc) {
          return {
            ...m,
            name: data.name,
            birth: data.birth,
            income: data.income,
            phone: data.phone,
          };
        }
        return m;
      });

      setMembers(currentMembers);
      setFeedback({
        type: "edit",
        message: "Cooperado editado com sucesso!",
      });
    },
    [members],
  );

  const removeMember = useCallback(
    (data: Member) => {
      const membersWithoutDeleted = members.filter((m) => m.doc !== data.doc);

      setMembers(membersWithoutDeleted);
      navigate("/");
    },
    [members, navigate],
  );

  const clearFeedBackAndErrors = useCallback(() => {
    setFeedback(null);
    setError("");
  }, []);

  const values = useMemo(
    () => ({
      members,
      error,
      feedback,
      addNewMember,
      editMember,
      removeMember,
      clearFeedBackAndErrors,
    }),
    [
      addNewMember,
      clearFeedBackAndErrors,
      editMember,
      error,
      feedback,
      members,
      removeMember,
    ],
  );

  return (
    <MembersContext.Provider value={values}>{children}</MembersContext.Provider>
  );
}

function useMembersContext() {
  const context = useContext(MembersContext);

  if (!context) {
    throw new Error("Members context must not be used outside its provider");
  }

  return context;
}

export { MembersProvider, useMembersContext };
