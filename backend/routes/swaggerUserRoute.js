/**
 * @swagger
 * /api/v1/register:
 *   post:
 *     summary: Đăng ký người dùng mới
 *     description: Tạo một người dùng mới trong hệ thống.
 *     tags:
 *       - Users
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               gender:
 *                 type: string
 *               password:
 *                 type: string
 *               avatar:
 *                 type: string
 *             example:
 *               name: John Doe
 *               email: johndoe@example.com
 *               gender: Male
 *               password: secret123
 *               avatar: https://example.com/avatar.jpg
 *     responses:
 *       '201':
 *         description: Người dùng đã được tạo thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *                     gender:
 *                       type: string
 *                     avatar:
 *                       type: object
 *                       properties:
 *                         public_id:
 *                           type: string
 *                         url:
 *                           type: string
 *                 token:
 *                   type: string
 */

/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: Đăng nhập người dùng
 *     description: Đăng nhập người dùng vào hệ thống với email và mật khẩu.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: johndoe@example.com
 *               password: secret123
 *     responses:
 *       '201':
 *         description: Đăng nhập thành công, trả về token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       '400':
 *         description: Không nhập đúng email hoặc mật khẩu
 *       '401':
 *         description: Email hoặc mật khẩu không hợp lệ
 */

/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: Đăng nhập người dùng
 *     description: Đăng nhập người dùng vào hệ thống với email và mật khẩu.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: johndoe@example.com
 *               password: secret123
 *     responses:
 *       '200':
 *         description: Đăng nhập thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái đăng nhập thành công
 *                 token:
 *                   type: string
 *                   description: Token xác thực người dùng
 *       '400':
 *         description: Lỗi request không hợp lệ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái đăng nhập không thành công
 *                 message:
 *                   type: string
 *                   description: Thông báo lỗi chi tiết
 *       '401':
 *         description: Sai thông tin đăng nhập (email hoặc mật khẩu không đúng)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái đăng nhập không thành công
 *                 message:
 *                   type: string
 *                   description: Thông báo lỗi chi tiết
 */

/**
 * @swagger
 * /api/v1/forgot-password:
 *   post:
 *     summary: Yêu cầu đặt lại mật khẩu
 *     description: Gửi email đặt lại mật khẩu cho người dùng dựa trên email đã cung cấp.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *             example:
 *               email: johndoe@example.com
 *     responses:
 *       '200':
 *         description: Email đã được gửi thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái gửi email thành công
 *                 message:
 *                   type: string
 *                   description: Thông báo thành công
 *       '404':
 *         description: Người dùng không tồn tại
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái không tìm thấy người dùng
 *                 message:
 *                   type: string
 *                   description: Thông báo lỗi chi tiết
 *       '500':
 *         description: Lỗi server trong quá trình gửi email
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái gửi email không thành công
 *                 message:
 *                   type: string
 *                   description: Thông báo lỗi chi tiết
 */

/**
 * @swagger
 * /api/v1/password/reset/{token}:
 *   put:
 *     summary: Đặt lại mật khẩu
 *     description: Đặt lại mật khẩu cho người dùng dựa trên mã token đã cung cấp.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         description: Mã token để đặt lại mật khẩu
 *         schema:
 *           type: string
 *       - in: body
 *         name: newPassword
 *         description: Đối tượng chứa mật khẩu mới để đặt lại
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             password:
 *               type: string
 *             confirmPassword:
 *               type: string
 *           example:
 *             password: newpassword123
 *             confirmPassword: newpassword123
 *     responses:
 *       '200':
 *         description: Mật khẩu đã được đặt lại thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái đặt lại mật khẩu thành công
 *                 message:
 *                   type: string
 *                   description: Thông báo thành công
 *       '400':
 *         description: Lỗi dữ liệu không hợp lệ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái không đặt lại mật khẩu thành công
 *                 message:
 *                   type: string
 *                   description: Thông báo lỗi chi tiết
 *       '404':
 *         description: Mã token không hợp lệ hoặc đã hết hạn
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái không tìm thấy người dùng
 *                 message:
 *                   type: string
 *                   description: Thông báo lỗi chi tiết
 */

/**
 * @swagger
 * /api/v1/password/update:
 *   put:
 *     summary: Cập nhật mật khẩu
 *     description: Cập nhật mật khẩu của người dùng đã đăng nhập.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *             example:
 *               oldPassword: oldpassword123
 *               newPassword: newpassword123
 *     responses:
 *       '201':
 *         description: Mật khẩu đã được cập nhật thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái cập nhật mật khẩu thành công
 *                 message:
 *                   type: string
 *                   description: Thông báo thành công
 *       '400':
 *         description: Mật khẩu cũ không đúng
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái không cập nhật mật khẩu thành công
 *                 message:
 *                   type: string
 *                   description: Thông báo lỗi chi tiết
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 */


/**
 * @swagger
 * /api/v1/me/update:
 *   put:
 *     summary: Cập nhật thông tin cá nhân
 *     description: Cập nhật thông tin cá nhân của người dùng đã đăng nhập.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               avatar:
 *                 type: string
 *                 format: binary
 *             example:
 *               name: John Doe
 *               email: johndoe@example.com
 *               avatar: [binary data]
 *     responses:
 *       '200':
 *         description: Thông tin cá nhân đã được cập nhật thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái cập nhật thành công
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 */


/**
 * @swagger
 * /api/v1/admin/users:
 *   get:
 *     summary: Lấy danh sách người dùng
 *     description: Lấy danh sách tất cả người dùng trong hệ thống (chỉ dành cho quản trị viên).
 *     tags:
 *       - Admin
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Danh sách người dùng đã được lấy thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái lấy danh sách người dùng thành công
 *                 users:
 *                   type: array
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 */

/**
 * @swagger
 * /api/v1/admin/user/{id}:
 *   get:
 *     summary: Lấy thông tin người dùng
 *     description: Lấy thông tin chi tiết của một người dùng theo ID (chỉ dành cho quản trị viên).
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID của người dùng cần lấy thông tin
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Thông tin người dùng đã được lấy thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái lấy thông tin người dùng thành công
 *       '404':
 *         description: Người dùng không tồn tại
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái không tìm thấy người dùng
 *                 message:
 *                   type: string
 *                   description: Thông báo lỗi chi tiết
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 */


/**
 * @swagger
 * /api/v1/admin/user/{id}/updateRole:
 *   put:
 *     summary: Cập nhật vai trò người dùng
 *     description: Cập nhật vai trò của một người dùng theo ID (chỉ dành cho quản trị viên).
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID của người dùng cần cập nhật vai trò
 *         required: true
 *         schema:
 *           type: string
 *       - in: body
 *         name: userRole
 *         description: Thông tin mới về vai trò của người dùng
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             gender:
 *               type: string
 *             role:
 *               type: string
 *           example:
 *             name: John Doe
 *             email: johndoe@example.com
 *             gender: male
 *             role: admin
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Vai trò người dùng đã được cập nhật thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái cập nhật vai trò thành công
 *       '404':
 *         description: Người dùng không tồn tại
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái không tìm thấy người dùng
 *                 message:
 *                   type: string
 *                   description: Thông báo lỗi chi tiết
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 */

/**
 * @swagger
 * /api/v1/admin/user/{id}:
 *   delete:
 *     summary: Xóa người dùng
 *     description: Xóa một người dùng theo ID (chỉ dành cho quản trị viên).
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID của người dùng cần xóa
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Người dùng đã được xóa thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái xóa người dùng thành công
 *       '404':
 *         description: Người dùng không tồn tại
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái không tìm thấy người dùng
 *                 message:
 *                   type: string
 *                   description: Thông báo lỗi chi tiết
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 */


/**
 * @swagger
 * /api/forgot-password:
 *   post:
 *     summary: Send OTP for password reset
 *     description: Sends a One-Time Password (OTP) to the user's email for password reset.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email address.
 *                 example: user@example.com
 *     responses:
 *       200:
 *         description: OTP sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message.
 *                   example: OTP sent successfully
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *                   example: User not found
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *                   example: Server Error
 */


/**
 * @swagger
 * /api/reset-password-otp:
 *   post:
 *     summary: Reset user password using OTP
 *     description: Reset user password using the provided OTP
 *     tags:
 *       - Users
 *     parameters:
 *       - in: body
 *         name: ResetPasswordRequest
 *         description: Object containing email, OTP, and newPassword
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               description: User's email
 *               example: user@example.com
 *             otp:
 *               type: string
 *               description: One-Time Password (OTP)
 *               example: 123456
 *             newPassword:
 *               type: string
 *               description: New password to set
 *               example: newpassword123
 *     responses:
 *       200:
 *         description: Password reset successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *                   example: Password reset successfully
 *       400:
 *         description: Invalid OTP or missing parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: Invalid OTP
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: Server Error
 */
