import { createStore, withProps } from '@ngneat/elf';
import { withEntities, selectAllEntities, setEntities, addEntities, updateEntities, deleteEntities, withUIEntities, withActiveId, selectActiveEntity, setActiveId, withActiveIds, selectActiveEntities, toggleActiveIds } from '@ngneat/elf-entities';
import { withRequestsCache, withRequestsStatus } from '@ngneat/elf-requests';

export interface SessionUI {
  id: number;
}

export interface Session {
  id: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SessionProps {
}

export const store = createStore({ name: 'session' }, withProps<SessionProps>({}), withEntities<Session>(), withUIEntities<SessionUI>(), withActiveId(), withActiveIds(), withRequestsCache<'session'>(), withRequestsStatus<'session'>());

export const activeSession$ = store.pipe(selectActiveEntities());

export const activeSessionC$ = store.pipe(selectActiveEntity());

export const session$ = store.pipe(selectAllEntities());

export function setSession(session: Session[]) {
  store.update(setEntities(session));
}

export function addSession(session: Session) {
  store.update(addEntities(session));
}

export function updateSession(id: Session['id'], session: Partial<Session>) {
  store.update(updateEntities(id, session));
}

export function deleteSession(id: Session['id']) {
  store.update(deleteEntities(id));
}

export function setActiveSessionId(id: Session['id']) {
  store.update(setActiveId(id));
}

export function toggleActiveSessionIds(ids: Array<Session['id']>) {
  store.update(toggleActiveIds(ids));
}
