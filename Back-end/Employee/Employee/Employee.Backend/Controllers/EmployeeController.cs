﻿using Employee.Core.CQRS.Employee.Command;
using Employee.Core.CQRS.Employee.Query;
using Employee.Service.Model;
using Microsoft.AspNetCore.Mvc;

namespace Employee.Backend.Controllers;

public class EmployeeController : APIControllerBase
{
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    [ProducesResponseType(401)]
    [ProducesResponseType(403)]
    [HttpGet("{id:int}")]
    public async Task<ActionResult<VMEmployee>> GetById(int id)
    {
        return await HandleQueryAsync(new GetAllEmployeeByIdQuery(id));
    }
    [HttpGet]
    public async Task<ActionResult<VMEmployee>> GetAllEmployee()
    {
        return await HandleQueryAsync(new GetAllEmployeeQuery());
    }
    [HttpPost]
    public async Task<ActionResult<VMEmployee>> CreateEmployee(VMEmployee command)
    {
        return await HandleCommandAsync(new CreateEmployeeCommand(command));
    }

}
