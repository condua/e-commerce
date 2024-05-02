/**
 * @swagger
 * /api/v1/products:
 *   get:
 *     summary: Lấy danh sách sản phẩm
 *     description: Lấy danh sách tất cả sản phẩm có sẵn trong cửa hàng.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: page
 *         description: Số trang hiện tại (mặc định là 1)
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         description: Số sản phẩm trên mỗi trang (mặc định là 12)
 *         schema:
 *           type: integer
 *           default: 12
 *       - in: query
 *         name: keyword
 *         description: Từ khóa tìm kiếm sản phẩm
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Danh sách sản phẩm đã được lấy thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái lấy danh sách sản phẩm thành công
 *                 products:
 *                   type: array
 *                 productsCount:
 *                   type: integer
 *                   description: Tổng số sản phẩm trong cửa hàng
 *                 resultPerPage:
 *                   type: integer
 *                   description: Số sản phẩm trên mỗi trang
 *                 filteredProductsCount:
 *                   type: integer
 *                   description: Số sản phẩm sau khi lọc theo điều kiện tìm kiếm
 *     security:
 *       - bearerAuth: []
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 */

/**
 * @swagger
 * /api/v1/products/all:
 *   get:
 *     summary: Lấy danh sách tất cả sản phẩm
 *     description: Lấy danh sách tất cả sản phẩm có sẵn trong cửa hàng (dùng cho trang sản phẩm chính).
 *     tags:
 *       - Products
 *     responses:
 *       '200':
 *         description: Danh sách tất cả sản phẩm đã được lấy thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái lấy danh sách sản phẩm thành công
 *                 products:
 *                   type: array
 */


/**
 * @swagger
 * /api/v1/admin/products:
 *   get:
 *     summary: Lấy danh sách sản phẩm (quản trị viên)
 *     description: Lấy danh sách tất cả sản phẩm có sẵn trong cửa hàng (dành cho quản trị viên).
 *     tags:
 *       - Admin
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Danh sách sản phẩm đã được lấy thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái lấy danh sách sản phẩm thành công
 *                 products:
 *                   type: array
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 */


/**
 * @swagger
 * /api/v1/admin/product/new:
 *   post:
 *     summary: Tạo sản phẩm mới (quản trị viên)
 *     description: Tạo sản phẩm mới trong cửa hàng (dành cho quản trị viên).
 *     tags:
 *       - Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Tên sản phẩm
 *               description:
 *                 type: string
 *                 description: Mô tả sản phẩm
 *               category:
 *                 type: string
 *                 description: Danh mục sản phẩm
 *               price:
 *                 type: number
 *                 description: Giá sản phẩm
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Link hình ảnh sản phẩm
 *               logo:
 *                 type: string
 *                 description: Logo thương hiệu
 *               brandname:
 *                 type: string
 *                 description: Tên thương hiệu
 *               specifications:
 *                 type: array
 *     responses:
 *       '201':
 *         description: Sản phẩm đã được tạo thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái tạo sản phẩm thành công
 *     security:
 *       - bearerAuth: []
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 */



/**
 * @swagger
 * /api/v1/admin/product/{id}:
 *   put:
 *     summary: Cập nhật thông tin sản phẩm (quản trị viên)
 *     description: Cập nhật thông tin của sản phẩm đã tồn tại trong cửa hàng (dành cho quản trị viên).
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID của sản phẩm cần cập nhật
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Tên sản phẩm
 *               description:
 *                 type: string
 *                 description: Mô tả sản phẩm
 *               category:
 *                 type: string
 *                 description: Danh mục sản phẩm
 *               price:
 *                 type: number
 *                 description: Giá sản phẩm
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Link hình ảnh sản phẩm
 *               logo:
 *                 type: string
 *                 description: Logo thương hiệu
 *               brandname:
 *                 type: string
 *                 description: Tên thương hiệu
 *               specifications:
 *                 type: array
 *                 items:
 *                   type: object
 *                   description: Đặc tả sản phẩm
 *               // Để tiếp tục, cần thêm các trường thông tin sản phẩm khác nếu cần
 *     responses:
 *       '201':
 *         description: Sản phẩm đã được cập nhật thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái cập nhật sản phẩm thành công
 *     security:
 *       - bearerAuth: []
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 *   delete:
 *     summary: Xóa sản phẩm (quản trị viên)
 *     description: Xóa một sản phẩm đã tồn tại trong cửa hàng (dành cho quản trị viên).
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID của sản phẩm cần xóa
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '201':
 *         description: Sản phẩm đã được xóa thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái xóa sản phẩm thành công
 *     security:
 *       - bearerAuth: []
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 */


/**
 * @swagger
 * /api/v1/product/{id}:
 *   get:
 *     summary: Lấy thông tin chi tiết sản phẩm
 *     description: Lấy thông tin chi tiết của một sản phẩm dựa trên ID của sản phẩm.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID của sản phẩm cần lấy thông tin chi tiết
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Thông tin chi tiết của sản phẩm đã được lấy thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái lấy thông tin sản phẩm thành công
 *       '404':
 *         description: Sản phẩm không tồn tại
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái lấy thông tin sản phẩm không thành công
 *                 error:
 *                   type: string
 *                   description: Thông báo lỗi
 */

/**
 * @swagger
 * /api/v1/review:
 *   put:
 *     summary: Tạo hoặc cập nhật đánh giá sản phẩm
 *     description: Tạo mới hoặc cập nhật đánh giá của một sản phẩm đã tồn tại.
 *     tags:
 *       - Reviews
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rating:
 *                 type: number
 *                 description: Điểm đánh giá (từ 1 đến 5)
 *               comment:
 *                 type: string
 *                 description: Bình luận đánh giá
 *               productId:
 *                 type: string
 *                 description: ID của sản phẩm được đánh giá
 *     responses:
 *       '200':
 *         description: Đánh giá sản phẩm đã được tạo hoặc cập nhật thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái tạo hoặc cập nhật đánh giá thành công
 *   tags:
 *     - Admin
 *   get:
 *     summary: Lấy tất cả đánh giá của một sản phẩm
 *     description: Lấy danh sách tất cả đánh giá của một sản phẩm dựa trên ID của sản phẩm.
 *     tags:
 *     - Admin
 *     parameters:
 *       - in: query
 *         name: id
 *         description: ID của sản phẩm cần lấy đánh giá
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Danh sách tất cả đánh giá của sản phẩm đã được lấy thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái lấy thông tin đánh giá thành công
 *                 reviews:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Review'
 * /api/v1/admin/reviews:
 *   get:
 *     summary: Lấy tất cả đánh giá của sản phẩm (quản trị viên)
 *     description: Lấy danh sách tất cả đánh giá của một sản phẩm dựa trên ID của sản phẩm (dành cho quản trị viên).
 *     tags:
 *       - Admin
 *     responses:
 *       '200':
 *         description: Danh sách tất cả đánh giá của sản phẩm đã được lấy thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái lấy thông tin đánh giá thành công
 *                 reviews:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Review'
 *   delete:
 *     summary: Xóa đánh giá sản phẩm (quản trị viên)
 *     description: Xóa một đánh giá của sản phẩm dựa trên ID của đánh giá (dành cho quản trị viên).
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: query
 *         name: id
 *         description: ID của đánh giá cần xóa
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: productId
 *         description: ID của sản phẩm liên quan đến đánh giá cần xóa
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Đánh giá đã được xóa thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Trạng thái xóa đánh giá thành công
 *   security:
 *     - bearerAuth: []
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */