import { UserByIdPipe } from './user-by-id.pipe';

describe('UserByIdPipe', () => {

  let mockUsersService;
  const mockUser = {"id":2,"name":"Austyn Torphy","followers":[8,17,23,38,46,51,67,74,85,90,106,118],"age":45,"verified":true};
  it('create an instance', () => {

    mockUsersService = jasmine.createSpyObj(['getUser']);
    mockUsersService.getUser.and.returnValue(mockUser);

    const pipe = new UserByIdPipe(mockUsersService);
    expect(pipe).toBeTruthy();
  });
});
